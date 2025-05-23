import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Dialog, DialogContent } from "../ui/dialog";

import { Badge } from "../ui/badge";
import { NotebookPen } from "lucide-react";
import { useState } from "react";

const PORTFOLIO = [
  { filename: "char1.png", label: "chara design" },
  { filename: "PinguSprites.png", label: "card sprites" },
  { filename: "face.png", label: "" },
  { filename: "girl2.jfif", label: "" },
  { filename: "girl1.jfif", label: "" },
  { filename: "shroom.jpg", label: "" },
  { filename: "faces.jpg", label: "" },
  { filename: "char2.jpg", label: "" },
  { filename: "study.jpg", label: "" },
];

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
      <Dialog
        open={Boolean(selectedImage)}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="border-0 p-0 [&>button]:hidden">
          {selectedImage && (
            <img className="max-h-[90vh]" src={selectedImage} />
          )}
        </DialogContent>
      </Dialog>
      <Carousel>
        <Badge className="absolute z-1 top-2 left-2 bg-neutral-700">
          <NotebookPen /> Portfolio
        </Badge>
        <CarouselContent>
          {PORTFOLIO.map(({ filename, label }, index) => {
            const path = `${import.meta.env.BASE_URL}/portfolio/${filename}`;
            return (
              <CarouselItem key={index}>
                <div
                  className="relative bg-neutral-500 rounded-lg overflow-hidden bg-cover"
                  style={{ backgroundImage: `url(${path})` }}
                >
                  <img
                    className="object-contain aspect-square backdrop-blur-lg cursor-pointer"
                    onClick={() => {
                      setSelectedImage(path);
                    }}
                    src={path}
                  />
                  {label && (
                    <span className="font-[courier] absolute text-sm bottom-2 left-1/2 transform -translate-x-1/2 text-neutral-800 rounded-sm bg-neutral-100/50 pl-1 pr-1">
                      {label}
                    </span>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          className="left-[10px] bg-neutral-600/75"
        />
        <CarouselNext
          variant="ghost"
          className="right-[10px] bg-neutral-600/75"
        />
      </Carousel>
    </>
  );
};
