import React from 'react';

import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Head from 'next/head';

import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import { motion } from 'framer-motion';
import { getPrismicClient } from '../../services/prismic';

import { Project } from '../../models/Project';

import {
  Border,
  Container,
  Projecto,
  ProjectsContainer
} from '../../styles/pages/Projects';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const router = useRouter();

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Head>
          <title>Projetos</title>
        </Head>
        <ProjectsContainer>
          <span>Testandoooo</span>
          {projects.map(project => {
            return (
              <React.Fragment key={project.slug}>
                <Projecto
                  onClick={() => router.push(`/projects/${project.slug}`)}
                >
                  <span className="title">{project.updatedAt}</span>
                  <div className="content">
                    <h2>{project.title}</h2>
                    <span>{project.excerpt}</span>
                  </div>
                </Projecto>
                <Border />
              </React.Fragment>
            );
          })}
        </ProjectsContainer>
      </Container>
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'projects')],
    {
      fetch: ['projects.title', 'projects.content'],
      pageSize: 100
    }
  );

  const projects = response.results.map(project => {
    return {
      slug: project.uid,
      title: RichText.asText(project.data.title),
      excerpt:
        project.data.content.find(content => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(project.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )
    };
  });

  return {
    props: { projects }
  };
};
