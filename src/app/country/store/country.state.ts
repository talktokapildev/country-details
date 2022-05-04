import { Region } from '../../core/models/region';
import { Country } from '../../core/models/country';

export interface CountryState {
  countries: Country[];
  loading: boolean;
  selectedCountry: any;
  regions: Region[];
}
