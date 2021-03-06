import { LanguageCode } from '@vendure/common/lib/generated-types';
import { DeepPartial } from '@vendure/common/lib/shared-types';
import { Translation } from '../../common/types/locale-types';
import { VendureEntity } from '../base/base.entity';
import { Country } from './country.entity';
export declare class CountryTranslation extends VendureEntity implements Translation<Country> {
    constructor(input?: DeepPartial<Translation<CountryTranslation>>);
    languageCode: LanguageCode;
    name: string;
    base: Country;
}
