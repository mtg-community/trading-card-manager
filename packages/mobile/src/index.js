import { PresentationLayer } from './presentation';
import { DataLayer } from './data';

export const initializeApplication = async () => {
  DataLayer();
  await PresentationLayer();
};
