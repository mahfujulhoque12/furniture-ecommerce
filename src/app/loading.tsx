const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-black  font-semibold text-lg"> Please Wait... </p>
         
            <div className="w-10 h-10 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
    );
  }
  
  export default Loading;