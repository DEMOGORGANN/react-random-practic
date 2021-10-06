import React from "react";
import { createContext } from "react";
import img1 from './../../img/6f359e2db24fc4e08bfd61cf50427139.png';
import img2 from './../../img/a561b38768fbe6667854fc00641b25fb.png';
import img3 from './../../img/e719e9d93c02a87ba51308ebb0297cdf.png';


export const WorkContext = createContext([{ id: 1, title: "Designing Dashboards", urlIMG: img1, date: "2020", typeWork: "Dashboard", body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
                                        { id: 2, title: "Vibrant Portraits of 2020", urlIMG: img2, date: "2018", typeWork: "Illustration", body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
                                        { id: 3, title: "36 Days of Malayalam type", urlIMG: img3, date: "2018", typeWork: "Typography", body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." }
]);