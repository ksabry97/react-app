import supabase from '../dbConnection.js';

export const getProducts = async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select(`id, product_name, description, price, image, colors`);
  if (error) res.status(400).send(error);
  else res.status(200).send({ results: data?.length, data });
};

export const getPopularProducts = async (req, res) => {
  const { data: popularProducts, error: popularProductsError } = await supabase
    .from('products')
    .select(`id, product_name, description, price, image, colors, tag_id`)
    .eq('is_popular', true);
  if (popularProductsError) res.status(400).send(popularProductsError);
  else {
    const tags_ids = popularProducts?.map((product) => product.tag_id);
    const { data: tags, error: tagsError } = await supabase
      .from('tags')
      .select()
      .in('id', tags_ids);
    if (tagsError) res.status(400).send(popularProductsError);
    else {
      res.status(200).send({
        results: popularProducts?.length,
        data: { popularProducts, tags },
      });
    }
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('products')
    .select(
      `id, product_name, description, price, image, colors, summary, detail_images`
    )
    .eq('id', id);
  if (error) res.status(400).send(error);
  else res.status(200).send({ results: data?.length, data });
};

export const searchProductByName = async (req, res) => {
  const { search } = req.query;
  const { product_name, description, category_name } = req.coloumns;
  // const searchTags = search
  //   .trim()
  //   .split(' ')
  //   .filter((tag) => tag != '')
  //   .join(' | ');

  const { data: nameResults, error: nameError } = await supabase
    .from('products')
    .select(`id, ${product_name}, image, category_id`)
    .filter(`${product_name}`, 'ilike', `%${search}%`);
  if (nameError) res.status(400).send(error);
  else {
    const { data: descriptionResults, error: descriptionError } = await supabase
      .from('products')
      .select(`id, ${product_name}, image, category_id`)
      .filter(`${description}`, 'ilike', `%${search}%`);
    if (descriptionError) res.status(400).send(error);
    else {
      const allSearchResults = [...nameResults, ...descriptionResults];
      const productsSet = new Set(allSearchResults?.map(JSON.stringify));
      const products = Array.from(productsSet, JSON.parse);
      const catIds = products.map((product) => product.category_id);
      const { data: categoriesResult, error: categoriesError } = await supabase
        .from('categories')
        .select(`id, ${category_name}`)
        .in('id', catIds);
      if (categoriesError) res.status(400).send(error);
      else {
        const categoriesSet = new Set(categoriesResult?.map(JSON.stringify));
        const categories = Array.from(categoriesSet, JSON.parse);
        res.status(200).send({
          categories: { results: categories?.length, categories },
          products: { results: products?.length, products },
        });
      }
    }
  }

  // const { data: nameResults, error: nameError } = await supabase
  //   .from('products')
  //   .select(`id, product_name, image, category_id`)
  //   .textSearch('product_name', `${searchTags}`);

  // const { data: descriptionResults, error: descriptionError } = await supabase
  //   .from('products')
  //   .select(`id, product_name, image, category_id`)
  //   .textSearch('description', `${searchTags}`);

  // const allSearchResults = [...nameResults, ...descriptionResults];
  // const dataset = new Set(allSearchResults?.map(JSON.stringify));
  // const data = Array.from(dataset, JSON.parse);

  // res.status(200).send({ results: data?.length, data });
};

export const filterProductsByCategories = async (req, res) => {
  const { catIds } = req.params;
  const category_ids = catIds.split('&');

  const { data, error } = await supabase
    .from('products')
    .select(`id, product_name, description, price, image, colors`)
    .in('category_id', category_ids);
  if (error) {
    res.status(400).send(error);
  } else {
    res.status(200).send({ results: data?.length, data });
  }
};
