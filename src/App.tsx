import "./App.css";

import { Card } from "./components/ui/card";

function App() {
  return (
    <main className="py-6 max-w-6xl px-3 sm:px-6 md:py-12 lg:px-12 mx-auto grid grid-cols-4 gap-6">
      <Card>Image</Card>
      <Card className="p-2 col-span-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad
          sapiente praesentium impedit similique esse illo quo adipisci, aperiam
          cumque accusantium minus nihil eum excepturi velit ea quia, dolore
          facere?
        </p>
      </Card>
      <Card className="p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad
          sapiente praesentium impedit similique esse illo quo adipisci, aperiam
          cumque accusantium minus nihil eum excepturi velit ea quia, dolore
          facere?
        </p>
      </Card>
      <Card className="p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad
          sapiente praesentium impedit similique esse illo quo adipisci, aperiam
          cumque accusantium minus nihil eum excepturi velit ea quia, dolore
          facere?
        </p>
      </Card>
      <Card className="p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad
          sapiente praesentium impedit similique esse illo quo adipisci, aperiam
          cumque accusantium minus nihil eum excepturi velit ea quia, dolore
          facere?
        </p>
      </Card>
      <Card className="p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad
          sapiente praesentium impedit similique esse illo quo adipisci, aperiam
          cumque accusantium minus nihil eum excepturi velit ea quia, dolore
          facere?
        </p>
      </Card>
    </main>
  );
}

export default App;
