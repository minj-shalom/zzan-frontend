import { FontDetail, getFontDetailQueryOptions } from "@/features";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type PageParams = Promise<{ id: string }>;

export default async function Page({ params }: { params: PageParams }) {
  const { id } = await params;
  const fontId = Number(id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getFontDetailQueryOptions(fontId));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FontDetail fontId={fontId} />
    </HydrationBoundary>
  );
}
