import { useQuery } from '@tanstack/react-query';

import { API } from '../../api';
import { VehicleTypeResponse } from '../../types';

export function useVehicleTypesQuery() {
  return useQuery<VehicleTypeResponse>(['useVehicleTypes'], async () => API.fetchVehicleTypes());
}
