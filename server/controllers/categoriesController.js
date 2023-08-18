import supabase from '../dbConnection.js';

export const getCategories = async (req, res) => {
  const { category_name } = req.coloumns;
  const { data, error } = await supabase
    .from('categories')
    .select(`id, ${category_name}, image`);
  res.status(200).send({ results: data?.length, data });
};

export const getCategoryProducts = async (req, res) => {
  const { id } = req.params;

  const { data: categoryProducts, error: categoryProductsError } =
    await supabase
      .from('products')
      .select(`id, product_name, description, price, image, colors`)
      .eq('category_id', id);
  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .select(`id, category_name`)
    .eq('id', id);
  res.status(200).send({
    results: categoryProducts?.length,
    data: { category, categoryProducts },
  });
};

export const filterCategoriesByIds = async (req, res) => {
  const { ids } = req.params;
  const category_ids = ids.split('&');

  const { data, error } = await supabase
    .from('categories')
    .select()
    .in('id', category_ids);
  res.status(200).send({ results: data?.length, data });
};
