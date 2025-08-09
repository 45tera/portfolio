import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";




export default function Projects() {
  return (
    <div className="px-32 py-2">
      <Carousel>
        <CarouselPrevious></CarouselPrevious>
        <CarouselContent className="p-2">

          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="px-2">
              <div className="flex gap-8 w-full">
                <img className="w-15rem h-[30rem] rounded-lg object-cover" src="smu best group buddies - Copy.jpg" />

                <div className="flex-auto min-w-0">
                  <Card className=" h-[30rem] ">
                    <div className="items-start justify-left">
                      <CardContent className="w-full">
                        <p className="text-2xl font-semibold">{index + 1}</p>
                        <p className="break-words">asdfasdfasdfssdfsadfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>
            </CarouselItem>

          ))}
        </CarouselContent>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>

  );
}