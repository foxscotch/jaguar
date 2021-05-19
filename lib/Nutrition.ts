import * as Yup from 'yup';
import { ObjectId } from 'mongodb';

class FoodItem {
  public name: string;
  public brand: ObjectId;
  public cost: number;
  public gtin: string;
  public nutrition: {
    servingSize: number;
    servingUnit: string;
    servingSizeAlt: string;
    calories: number;
    nutritionInfo: ObjectId;
  };

  public static schema = Yup.object().shape({
    name: Yup.string().required(),
    brand: Yup.object(),
    cost: Yup.number(),
    gtin: Yup.string(),
    nutrition: Yup.object().shape({
      servingSize: Yup.number(),
      servingUnit: Yup.string(),
      servingSizeAlt: Yup.string(),
      calories: Yup.number(),
      nutritionInfo: Yup.object(),
    }),
  });

  constructor(obj: any) {
    this.name = obj.name;
    this.brand = obj.brand;
    this.cost = obj.cost;
    this.gtin = obj.gtin;
    this.nutrition = obj.nutrition;
  }
}
