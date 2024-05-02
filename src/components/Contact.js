const Contact = () => {
  return (
    <div className="text-center py-10 font-bold text-xl">
      <h1>Contact us page..</h1>
      <form action="" className="py-10">
        <input
          type="text"
          placeholder="Enter Name"
          className="p-2 m-2  border-2 border-sky-500 shadow-lg"
        />
        <input
          type="text"
          placeholder="Message"
          className="p-2 m-2  border-2 border-sky-500 shadow-lg"
        />
        <button
          type="button"
          className="p-2 m-2  border-2 border-sky-500 shadow-lg rounded-lg bg-slate-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
