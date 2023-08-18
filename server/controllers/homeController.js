import supabase from '../dbConnection.js';

export const getHomeFeed = async (req, res) => {
  const { product_name, description, category_name, tag_name } = req.coloumns;

  const { data: homeCategories, error: homeCategoriesError } = await supabase
    .from('categories')
    .select(`id, ${category_name}, image`)
    .limit(6);
  if (homeCategoriesError) {
    res.status(400).send(homeCategoriesError);
    return;
  }
  const { data: homePopularProducts, error: homePopularProductsError } =
    await supabase
      .from('products')
      .select(
        `id, ${product_name}, ${description}, price, image, colors, tag_id, category_id`
      )
      .eq('is_popular', true)
      .limit(10);

  if (homePopularProductsError) {
    res.status(400).send(homePopularProductsError);
    return;
  }
  const hometags_ids = homePopularProducts?.map((product) => product.tag_id);
  const { data: homeTags, error: homeTagsError } = await supabase
    .from('tags')
    .select(`id, ${tag_name}`)
    .in('id', hometags_ids);
  if (homeTagsError) {
    res.status(400).send(homeTagsError);
    return;
  }
  const { data: homeAppliances, error: homeAppliancesError } = await supabase
    .from('products')
    .select(`id, ${product_name}, ${description}, price, image, colors`)
    .eq('category_id', 1)
    .limit(5);
  if (homeAppliancesError) {
    res.status(400).send(homeAppliancesError);
    return;
  }
  res.status(200).send({
    data: { homeCategories, homePopularProducts, homeTags, homeAppliances },
  });
};
