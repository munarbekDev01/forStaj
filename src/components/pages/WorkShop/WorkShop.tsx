"use client";
import { FC, useState } from "react";
import scss from "./WorkShop.module.scss";
import {
  useGetFreeWorkShopWithIdQuery,
  useGetFreeWorkShopsQuery,
} from "@/redux/api/site";

const WorkShop: FC = () => {
  const { data } = useGetFreeWorkShopsQuery();
  const [more, setMore] = useState<number>();
  const { data: det } = useGetFreeWorkShopWithIdQuery(more);
  
  return (
    <section className={scss.WorkShop}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.workTop}>
            <h1>
              Upcoming Free Workshops <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>VIEW ALL WORKSHOP</button>
          </div>
          <div className={scss.workBottom}>
            <div className={scss.blocks}>
              {data?.map((el) => (
                <div key={el.id} className={scss.block}>
                  <h1>{el.name}</h1>
                  <p>
                    {more === el.id
                      ? det?.description
                      : el.description.slice(
                          0,

                          el.description.length - 310
                        )}
                  </p>
                  <button
                    onClick={() =>
                      more === el.id ? setMore(0) : setMore(el.id)
                    }
                  >
                    {more !== el.id ? "LEARN MORE" : "COLLAPS"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShop;
