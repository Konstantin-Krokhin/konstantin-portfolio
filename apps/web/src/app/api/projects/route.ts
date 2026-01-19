import { NextRequest, NextResponse } from "next/server";
import { listProjects } from "@/server/projects";

export async function GET(_req: NextRequest) {
  const projects = await listProjects();
  return NextResponse.json(projects);
}
