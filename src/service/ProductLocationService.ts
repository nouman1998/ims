import { ProductLocationRepository } from "../repository/ProductLocationRepository";

export default class ProductLocationService {
    
    private productLocationRepository = ProductLocationRepository;
   
    saveAll(productLocations: any[]) {
        this.productLocationRepository.save(productLocations);
    }

}
