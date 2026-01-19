import { NextRequest, NextResponse } from "next/server";
import { getProjectBySlug } from "@/server/projects";

export const runtime = "nodejs";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  if (!project) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
