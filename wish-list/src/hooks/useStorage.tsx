import { useQuery } from "react-query";
import { StoreService } from "../services/StoreService";

export const useStorage =()=>{
    const { isLoading, data:posts } = useQuery(
        StoreService.storeKey,
          () => StoreService.getStore(),
          {
            onError: (error: any) => {
              alert(error.message);
            },
          }
        );
        return {isLoading, posts}
}
