import DiscountScraper from './discount';
import LeumiCardScraper from './leumi-card';
import IsracardScraper from './isracard';
import AmexScraper from './amex';

export default function createScraper(options) {
  switch (options.companyId) {
    case 'discount':
      return new DiscountScraper(options);
    case 'leumiCard':
      return new LeumiCardScraper(options);
    case 'isracard':
      return new IsracardScraper(options);
    case 'amex':
      return new AmexScraper(options);
    default:
      throw new Error(`unkown company id ${options.companyId}`);
  }
}
