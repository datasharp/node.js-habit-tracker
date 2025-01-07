import React from 'react';
import ImageGallery from 'react-image-gallery';

function GalleryPage() {
  const images = [
    {
      original: 'images/sql-inserting-data-staging-table.png',
      thumbnail: 'images/sql-inserting-data-staging-table.png',
      description: `SQL code showing data inserted into table`,
      originalHeight: '450px',
    },
    {
      original: "images/sql-creating-data-staging-table.png",
      thumbnail: "images/sql-creating-data-staging-table.png",
      description: `SQL code creating staging table`,
      originalHeight: '450px',
    },
    {
      original: "images/python-visualization-function-script.png",
      thumbnail: "images/python-visualization-function-script.png",
      description: `Python visualization in matplotlib`,
      originalHeight: '450px',
    },
    {
      original: "images/python-matplotlib-line-graph.png",
      thumbnail: "images/python-matplotlib-line-graph.png",
      description: `Matplotlib line chart`,
      originalHeight: '450px',
    },
    {
      original: "images/python-main.png",
      thumbnail: "images/python-main.png",
      description: `Python main file example`,
      originalHeight: '450px',
    },
    {
      original: "images/python-cleaning-script.png",
      thumbnail: "images/python-cleaning-script.png",
      description: `Python connecting to Google Analytics API`,
      originalHeight: '450px',
    },
    {
      original: "images/python-api-call.png",
      thumbnail: "images/python-api-call.png",
      description: `Python API Call`,
      originalHeight: '450px',
    },
    {
      original: "images/python-airflow-group-dag.png",
      thumbnail: "images/python-airflow-group-dag.png",
      description: `Python Airflow Group DAG`,
      originalHeight: '450px',
    },
    {
      original: "images/python-airflow-dimension-layer.png",
      thumbnail: "images/python-airflow-dimension-layer.png",
      description: `Python Airflow DAG to move data into dimensional layer`,
      originalHeight: '450px',
    },
    {
      original: "images/movies-dimensional-data-model.png",
      thumbnail: "images/movies-dimensional-data-model.png",
      description: `Star Schema Data Model`,
      originalHeight: '450px',
    }
  ];

  return (
    <>
      <h2>Gallery</h2>
      <article>
        <ImageGallery items={images} />
      </article>
    </>
  );
}
export default GalleryPage;
