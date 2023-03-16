const PageTitle = ({ category }) => {
  const pageTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    : "";

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-5 lg:px-8 flex h-16 items-center justify-between">
      {pageTitle && (
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 ml-5">
          {pageTitle}
        </h1>
      )}
    </div>
  );
};

export default PageTitle;
