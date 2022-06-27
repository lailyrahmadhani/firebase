import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import cn from "classnames";

function TextCustom() {
  const [text, setText] = useState("");

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isLineThrough, setIsLineThrough] = useState(false);

  function handleTextChange(event) {
    const value = event.target.value;
    setText(value);
  }

  return (
    <Container className="pt-4">
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Masukkan text apapun"
          value={text}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          inline
          label="Bold"
          name="bold"
          id="bold"
          type="checkbox"
          value={isBold}
          onChange={() => setIsBold(!isBold)}
        />
        <Form.Check
          inline
          label="Italic"
          name="italic"
          id="italic"
          type="checkbox"
          value={isItalic}
          onChange={() => setIsItalic(!isItalic)}
        />
        <Form.Check
          inline
          label="Underline"
          name="underline"
          id="underline"
          type="checkbox"
          value={isUnderline}
          onChange={() => setIsUnderline(!isUnderline)}
        />
        <Form.Check
          inline
          label="Line Through"
          name="line-through"
          id="line-through"
          type="checkbox"
          value={isLineThrough}
          onChange={() => setIsLineThrough(!isLineThrough)}
        />
      </Form.Group>

      <p
        className={cn(
          isBold && "fw-bold",
          isItalic && "fst-italic",
          isUnderline && "text-decoration-underline",
          isLineThrough && "text-decoration-line-through"
        )}
      >
        {text}
      </p>
    </Container>
  );
}

export default TextCustom;
