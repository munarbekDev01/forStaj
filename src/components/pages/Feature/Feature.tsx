"use client";
import { FC, useState } from "react";
import scss from "./Feature.module.scss";
import { useGetCoursesQuery, useGetCouseWithIdQuery } from "@/redux/api/site";

const Feature: FC = () => {
  const [more, setMore] = useState<number>();
  const { data } = useGetCoursesQuery();
  const { data: det } = useGetCouseWithIdQuery(more);
  console.log(det);

  return (
    <section className={scss.Feature}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.featureTop}>
            <h1>
              Featured Courses
              <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>VIEW ALL COURSES</button>
          </div>
          <div className={scss.featureBottom}>
            <div className={scss.blocks}>
              {data?.map((el) => (
                <div key={el.id} className={scss.block}>
                  {more === el.id ? (
                    <h1
                      style={{
                        textAlign: "center",
                        paddingTop: "45px",
                      }}
                    >
                      "подробная информация"
                    </h1>
                  ) : (
                    <img src={el.image} alt="" />
                  )}

                  <div className={scss.blockText}>
                    <h1>
                      {el.id === more ? "Название : " : null}
                      {el.name}
                    </h1>
                    <p>
                      {more === el.id ? "Имя автора : " : null} {el.author}
                    </p>
                    <span>
                      {more === el.id ? "цена : " : null} {el.price}$
                    </span>
                    {more === el.id ? (
                      <p>дата добавления : {det?.updated_date.slice(0, 10)}</p>
                    ) : null}
                    {more === el.id ? <p>город: {det?.city}</p> : null}
                    {more === el.id ? (
                      <p>описание: {det?.description}</p>
                    ) : null}
                    <button
                      onClick={() =>
                        more === el.id ? setMore(0) : setMore(el.id)
                      }
                    >
                      {more !== el.id ? "LEARN MORE" : "COLLAPS"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
