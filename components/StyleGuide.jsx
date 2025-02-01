import Link from "next/link";
import { Button } from "./ui/button";

const StyleGuide = () => {
  return (
    <>
      {/* typography */}
      <div className="flex flex-col gap-y-4 p-24">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          obcaecati vel id, distinctio reprehenderit similique? Veritatis
          mollitia repellat excepturi voluptatem dolores aut esse saepe sed
          quam. Dolore, beatae hic! Aperiam?
        </p>
      </div>
      <div className="bg-black p-24 flex flex-col gap-y-4">
        <Link href="/">Link</Link>
        {/* buttons */}
        <Button variant="default">Button 1</Button>
        <Button variant="orange">Button 2</Button>
        <Button variant="input">Button 3</Button>
      </div>
    </>
  );
};

export default StyleGuide;
