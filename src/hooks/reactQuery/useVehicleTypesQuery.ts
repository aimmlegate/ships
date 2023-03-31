import { useQuery } from '@tanstack/react-query';

import { API } from '../../utils/api';
import { VehicleTypeResponse } from '../../utils/types';

export function useVehicleTypesQuery() {
  return useQuery<VehicleTypeResponse>(['useVehicleTypes'], async () => API.fetchVehicleTypes());
}
