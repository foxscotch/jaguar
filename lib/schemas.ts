import mongoose from 'mongoose';
import gtin from 'gtin';

const ObjectId = mongoose.SchemaTypes.ObjectId;

const nutritionInfoFieldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  unit: { type: String, required: true },
  dailyValue: { type: Number },
});

export const NutritionInfoField = mongoose.model(
  'NutritionInfoField',
  nutritionInfoFieldSchema
);

const nutritionInfoSchema = new mongoose.Schema({
  field: { type: ObjectId, ref: 'NutritionInfoField' },
  value: { type: Number },
});

export const NutritionInfo = mongoose.model(
  'NutritionInfo',
  nutritionInfoSchema
);

const foodItemSchema = new mongoose.Schema({
  name: String,
  brand: { type: ObjectId, ref: 'Brand' },
  cost: { type: Number, required: false },
  gtin: { type: String, maxLength: 14, required: false },
  nutritionInfo: {
    servingSize: Number,
    servingUnit: Number,
    servingSizeAlt: { type: String, required: false },
    calories: Number,
    nutritionInfo: [{ type: ObjectId, ref: 'NutritionInfo' }],
  },
});

export const FoodItem = mongoose.model('FoodItem', foodItemSchema);
