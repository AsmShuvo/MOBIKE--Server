const reviewModel = require("../model/reviewModel");

exports.getReview = async () => {
  const review = await reviewModel.find();
  return review;
};

exports.createReview = async (data) => {
  const result = await reviewModel.create(data);
  return result;
};
