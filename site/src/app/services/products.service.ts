import { Injectable } from '@angular/core';
import { IProduct, IProductGrouped, ProductType } from '../interfaces/products';

const products: IProduct[] = [
  {
    id: '1',
    text: 'Create a compelling mix with the latest Social Media Strategies. Achieve business growth goals stay ahead of competitors',
    title: 'Social Media For Business Strategy',
    link: 'https://www.udemy.com/course/social-media-for-business2/',
    image: 'https://img-c.udemycdn.com/course/240x135/27562_1a11_9.jpg',
    time: '2019/03/01',
    type: ProductType.Marketing,
  },
  {
    id: '2',
    text: 'Learn a Proven, Step-by-Step Process You Can Use to Package, Brand, Market, & Sell Your Coaching or Consulting Services',
    title: 'How to Market Yourself as a Coach or Consultant',
    link: 'https://www.udemy.com/course/how-to-market-yourself-as-a-coach-or-consultant-z/',
    image: 'https://img-c.udemycdn.com/course/240x135/46538_aa04_10.jpg',
    time: '2022/04/01',
    type: ProductType.Marketing,
  },
  {
    id: '3',
    text: 'Learn javascript online and supercharge your web design with this Javascript for beginners training course.',
    title: 'Javascript for Beginners',
    link: 'https://www.udemy.com/course/beginning-javascript/',
    image: 'https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg',
    time: '2023/07/01',
    type: ProductType.Development,
  },
  {
    id: '4',
    text: 'The simplest way to learn C# programming.',
    title: 'Learn C# Programming (In Ten Easy Steps)',
    link: 'https://www.udemy.com/course/learn-c-sharp-programming-in-ten-easy-steps/',
    image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
    time: '2023/05/01',
    type: ProductType.Development,
  },
  {
    id: '5',
    text: 'Essential Skills for Designers - Masking',
    title: 'Learn everything you need to know about masking techniques in Adobe Photoshop, Illustrator and InDesign.',
    link: 'https://www.udemy.com/course/photoshop-masking/',
    image: 'https://img-c.udemycdn.com/course/240x135/49553_15ee_7.jpg',
    time: '2019/12/01',
    type: ProductType.Design,
  },
  {
    id: '6',
    text: 'Design Web Sites and Mobile Apps that Your Users Love and Return to Again and Again with UX Expert Joe Natoli.',
    title: 'User Experience Design Fundamentals',
    link: 'https://www.udemy.com/course/user-experience-design-fundamentals/',
    image: 'https://img-c.udemycdn.com/course/240x135/58207_2ec2_7.jpg',
    time: '2019/12/01',
    type: ProductType.Design,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly products: IProduct[] = products;

  public getById(id: string): IProduct | undefined {
    return this.products.find((p: IProduct) => p.id === id);
  }

  public get byGroup(): IProductGrouped {
    return this.products.reduce((group: IProductGrouped, p: IProduct) => {
      if (!group[p.type]) {
        group[p.type] = [];
      }
      group[p.type].push(p);
      return group;
    }, {} as IProductGrouped);
  }
}
