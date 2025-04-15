import { fontListInitialQuery } from "@/constants";
import { FontList, getFontListQueryOptions } from "@/features";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    getFontListQueryOptions(fontListInitialQuery)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FontList />
    </HydrationBoundary>
  );
}
