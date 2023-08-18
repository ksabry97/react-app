const coloumns_ar = {
  product_name: 'product_name_ar',
  description: 'description_ar',
  summary: 'summary_ar',
  category_name: 'category_name_ar',
  tag_name: 'tag_name_ar',
};
const coloumns = {
  product_name: 'product_name',
  description: 'description',
  summary: 'summary',
  category_name: 'category_name',
  tag_name: 'tag_name',
};

export const checkLanguage = (req, res, next) => {
  const lng = req.header('lng');
  if (lng === 'ar') {
    req.coloumns = coloumns_ar;
    return next();
  }
  req.coloumns = coloumns;
  next();
};
