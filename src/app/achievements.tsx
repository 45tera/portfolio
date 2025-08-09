import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge";



const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)


export default function Achievements() {
  return (<main>


    <div className="px-32 py-4">

      <ScrollArea className="h-[30rem] w-70rem rounded-md border">
        <div className="flex">
          <h4 className="text-lg my-4 mx-8 font-medium">🏆 Achievement Unlocked!</h4>

        </div>
        <div className="px-6">
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="pl-4 text-sm">
                <div>{tag} <Badge className="ml-4" variant="secondary">2025</Badge></div>
                <div>Lorem Ipsum</div>
              </div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  </main>);
}