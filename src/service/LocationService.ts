import { Location } from "../entity/Location";
import { LocationRepository } from "../repository/LocationRepository";
import Response from "../common/response/Response";

export default class LocationService {
    private locationRepository = LocationRepository;

    async getAllLocations(
        merchantId: number,
    ): Promise<any> {
        let data = await this.locationRepository.findAllLocationsByCriteria( merchantId);
        let dtos = data.map((location: Location) => ({
            locationId: location.locationId,
            locationTitle: location.locationTitle,
        }));
        return new Response<any>(dtos);

    }
}
