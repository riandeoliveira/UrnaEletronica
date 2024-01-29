import { Project } from "components/Project";
import { Section } from "components/Section";
import { projects } from "data/projects";
import type { ReactElement } from "react";
import { Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export const ProjectsSection = (): ReactElement => {
  return (
    <Section title="Projetos 💡">
      <Swiper
        grabCursor
        spaceBetween={24}
        centeredSlides
        keyboard={{ enabled: true }}
        navigation
        slidesPerView={1}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation, Keyboard]}
        className={styles.slider}
      >
        {projects.map((projectData) => (
          <SwiperSlide key={projectData.id}>
            <Project data={projectData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
