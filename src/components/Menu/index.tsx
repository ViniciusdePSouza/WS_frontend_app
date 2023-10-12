"use client";

import { TagsProps } from "@/@types/tags";
import { Anchor, Container } from "./styles";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export function Menu() {
  const [allTags, setAllTags] = useState<TagsProps[]>([]);

  const pathname = usePathname();

  async function fetchAllTags() {
    const response = await api.get("/tags");

    return response;
  }

  useEffect(() => {
    async function populateAllTags() {
      const response = await fetchAllTags();
      setAllTags(response.data);
    }

    populateAllTags();
  }, []);

  return (
    <Container>
      <h2>Categories</h2>
      <ul>
        {allTags.length &&
          allTags.map((tag) => (
            <li key={tag.id}>
              <Link href={tag.path}>
                -{" "}
                <Anchor active={pathname === `${tag.path}`}>
                  {tag.description}
                </Anchor>
              </Link>
            </li>
          ))}

        <li >
          <Link href='/cart'>
            -{" "}
            <Anchor active={pathname === '/cart'}>
              Cart
            </Anchor>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
