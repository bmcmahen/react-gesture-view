import * as React from "react";
import { storiesOf } from "@storybook/react";
import GestureView, { CallbackProps, GestureViewHandles } from "../src";
import { StateType } from "pan-responder-hook";

storiesOf("Hello", module)
  .add("Example", () => (
    <div>
      <div>hi</div>
      <BasicExample />
    </div>
  ))
  .add("initial index", () => (
    <div>
      <div>hi</div>
      <BasicExample defaultIndex={1} />
    </div>
  ))
  .add("lazy loading", () => <LazyExample />)
  .add("Embedded", () => (
    <BasicExample>
      <BasicExample
        style={{
          height: "300px",
          overflow: "hidden"
        }}
        onTerminationRequest={() => false}
      />
    </BasicExample>
  ))
  .add("Embedded with parent takeover", () => <ParentTakeoverExample />);

function ParentTakeoverExample() {
  const [childIndex, setChildIndex] = React.useState(0);
  const [parentIndex, setParentIndex] = React.useState(0);

  function onParentTerminationRequest({ delta }: StateType) {
    if (childIndex !== 0) {
      return true;
    }

    const [x] = delta;

    if (x < 0) {
      return true;
    }

    return false;
  }

  function onChildTerminationRequest({ delta }: StateType) {
    if (childIndex > 0) {
      return false;
    }

    const [x] = delta;

    if (x < 0) {
      return false;
    }

    return true;
  }

  return (
    <BasicExample
      value={parentIndex}
      onRequestChange={(i: number) => setParentIndex(i)}
      onTerminationRequest={onParentTerminationRequest}
      id="parent"
    >
      <BasicExample
        id="child"
        style={{
          height: "300px",
          overflow: "hidden"
        }}
        value={childIndex}
        onRequestChange={(i: number) => setChildIndex(i)}
        onTerminationRequest={onChildTerminationRequest}
      />
    </BasicExample>
  );
}

function BasicExample({
  onTerminationRequest,
  style,
  id,
  onRequestChange,
  value,
  defaultIndex = 0,
  children
}: any) {
  const [index, setIndex] = React.useState(defaultIndex);
  const ref = React.useRef<GestureViewHandles>(null);

  React.useEffect(() => {
    ref.current!.focus();
  }, []);

  return (
    <GestureView
      ref={ref}
      value={value || index}
      id={id}
      onTerminationRequest={onTerminationRequest}
      onRequestChange={onRequestChange || (i => setIndex(i))}
      style={{
        width: "300px",

        height: "500px",
        ...style
      }}
    >
      <div style={{ flex: 1, background: "blue" }}>
        <div>
          <button onClick={() => setIndex(1)}>next</button>
          <RandomContent />
        </div>
      </div>
      <div style={{ flex: 1, background: "yellow" }}>
        <button onClick={() => setIndex(0)}>prev</button>
      </div>
      {(props: CallbackProps, active: boolean) => {
        return <div {...props}>Render callback</div>;
      }}
      <div
        style={{
          flex: 1,
          background: "green",
          paddingTop: "200px"
        }}
      >
        {children}
      </div>
    </GestureView>
  );
}

function LazyExample() {
  const [index, setIndex] = React.useState(0);
  return (
    <GestureView
      lazyLoad
      value={index}
      onRequestChange={i => setIndex(i)}
      style={{
        width: "300px",
        height: "500px"
      }}
    >
      <div style={{ flex: 1, background: "blue" }}>
        <div>
          <button onClick={() => setIndex(1)}>next</button>
          <RandomContent />
        </div>
      </div>
      <div style={{ flex: 1, background: "yellow" }}>
        <button onClick={() => setIndex(0)}>prev</button>
      </div>
      <div style={{ flex: 1, background: "green" }}>
        <RandomContent />
      </div>
    </GestureView>
  );
}

function RandomContent() {
  React.useEffect(() => {
    console.log("mounted!");
  }, []);
  return (
    <React.Fragment>
      <p>
        Sunt consequat officia velit mollit nisi ex ut voluptate. Ipsum mollit
        fugiat non ipsum ea duis adipisicing duis tempor veniam et anim.
        Voluptate minim deserunt ipsum laboris duis aliquip consequat velit
        ipsum deserunt minim sit sint. Cillum aliqua mollit duis sunt minim elit
        ea laboris esse ipsum proident consequat enim. Deserunt quis ex labore
        amet officia veniam fugiat. Reprehenderit pariatur cillum consectetur
        consectetur ut.
      </p>
      <p>
        Sunt consequat officia velit mollit nisi ex ut voluptate. Ipsum mollit
        fugiat non ipsum ea duis adipisicing duis tempor veniam et anim.
        Voluptate minim deserunt ipsum laboris duis aliquip consequat velit
        ipsum deserunt minim sit sint. Cillum aliqua mollit duis sunt minim elit
        ea laboris esse ipsum proident consequat enim. Deserunt quis ex labore
        amet officia veniam fugiat. Reprehenderit pariatur cillum consectetur
        consectetur ut.
      </p>
      <p>
        Sunt consequat officia velit mollit nisi ex ut voluptate. Ipsum mollit
        fugiat non ipsum ea duis adipisicing duis tempor veniam et anim.
        Voluptate minim deserunt ipsum laboris duis aliquip consequat velit
        ipsum deserunt minim sit sint. Cillum aliqua mollit duis sunt minim elit
        ea laboris esse ipsum proident consequat enim. Deserunt quis ex labore
        amet officia veniam fugiat. Reprehenderit pariatur cillum consectetur
        consectetur ut.
      </p>
      <p>
        Sunt consequat officia velit mollit nisi ex ut voluptate. Ipsum mollit
        fugiat non ipsum ea duis adipisicing duis tempor veniam et anim.
        Voluptate minim deserunt ipsum laboris duis aliquip consequat velit
        ipsum deserunt minim sit sint. Cillum aliqua mollit duis sunt minim elit
        ea laboris esse ipsum proident consequat enim. Deserunt quis ex labore
        amet officia veniam fugiat. Reprehenderit pariatur cillum consectetur
        consectetur ut.
      </p>
      <p>
        Sunt consequat officia velit mollit nisi ex ut voluptate. Ipsum mollit
        fugiat non ipsum ea duis adipisicing duis tempor veniam et anim.
        Voluptate minim deserunt ipsum laboris duis aliquip consequat velit
        ipsum deserunt minim sit sint. Cillum aliqua mollit duis sunt minim elit
        ea laboris esse ipsum proident consequat enim. Deserunt quis ex labore
        amet officia veniam fugiat. Reprehenderit pariatur cillum consectetur
        consectetur ut.
      </p>
    </React.Fragment>
  );
}
