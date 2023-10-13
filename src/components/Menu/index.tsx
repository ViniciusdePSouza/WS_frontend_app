"use client";

import { TagsProps } from "@/@types/tags";
import { Anchor, Container, NavLink } from "./styles";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { Tag } from "@phosphor-icons/react";

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
        {allTags &&
          allTags.map((tag) => (
            <li key={tag.id}>
              <NavLink href={tag.path}>
                <Tag size={32} color="#F8F5F9"/>
                <Anchor active={pathname === `${tag.path}` ? 'underline' : 'none'}>
                  {tag.description}
                </Anchor>
              </NavLink>
            </li>
          ))}

        <li >
          <NavLink href='/cart'>
            <Tag size={32} color="#F8F5F9"/>
            <Anchor active={pathname === '/cart' ? 'underline' : 'none'}>
              Cart
            </Anchor>
          </NavLink>
        </li>
      </ul>
    </Container>
  );
}
