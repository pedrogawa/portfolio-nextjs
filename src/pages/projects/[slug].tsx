/* eslint-disable react/no-danger */
import { GetServerSideProps } from 'next';
import React from 'react';

import { RichText } from 'prismic-dom';
import { motion } from 'framer-motion';
import { getPrismicClient } from '../../services/prismic';

import { Container } from './project';
import { Project as ProjectModel } from '../../models/Project';

interface ProjectProps {
  project: ProjectModel;
}

export default function Project({ project }: ProjectProps) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <article>
          <h1>{project.title}</h1>
          <time>{project.updatedAt}</time>
          <img src={project.image.url} alt="" />

          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>
      </Container>
    </motion.div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('projects', String(slug), {});

  const project = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    image: response.data.image,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  };

  return {
    props: {
      project
    }
  };
};
