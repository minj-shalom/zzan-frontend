import { HttpStatusCode } from "axios";

export async function GET() {
  return new Response(
    JSON.stringify({
      status: HttpStatusCode.Ok,
      message: "서버 헬스 체크를 완료했습니다.",
    }),
    {
      status: HttpStatusCode.Ok,
      headers: { "Content-Type": "application/json" },
    }
  );
}
