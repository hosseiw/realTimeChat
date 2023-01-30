import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";

const App = () => {
  return (
    <div className="bg-[#101010] w-full h-[256px] flex align-middle items-center mx-auto ">
      {/* <Header /> */}
      {/* <div>
        <div className="w-full h-full">
          <h1>Btn SCHEME </h1>
          <div className="flex flex-row gap-5">
            <a className="btn btn-success">btn success</a>
            <a className="btn btn-danger">btn danger</a>
            <a className="btn btn-primary">btn primary</a>
            <a className="btn btn-warning">btn warning</a>
          </div>
        </div>
      </div> */}

      <Menu />
    </div>
  );
};

export default App;
