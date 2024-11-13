"use client"
import { FC } from "react";
import scss from "./Articles.module.scss";
import { useGetArticlesQuery } from "@/redux/api/site";

const Articles: FC = () => {
  const {data} = useGetArticlesQuery()
  
  return (
    <section className={scss.Articles}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.articlesTop}>
            <h1>
              Recent Articles <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>VIEW ALL ARTICLES</button>
          </div>
          <div className={scss.articlesBottom}>
            <div className={scss.blocks}>
              {
                data?.map((el) => (

              <div className={scss.block}>
                <img
                src={el.image}
                  alt=""
                />
                <div className={scss.blockText}>
                  <p>{el.created_date}</p>
                  <h1>{el.name}</h1>
                  <span>{el.author}</span>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
