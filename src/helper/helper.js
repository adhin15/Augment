import { StarFilled, StarOutlined } from "@ant-design/icons";

export const SinglePlayer = (e) => {
  if (e) {
    return "Single Player";
  } else {
    return "";
  }
};

export const MultiPlayer = (e) => {
  if (e) {
    return "Multi Player";
  } else {
    return "";
  }
};

export const Total = (e) => {
  const page = e.length;
  return page;
};
export const platform = (e) => {
  if (e === "PC") {
    return "WindowsFilled";
  }
};

export const Rating = (e) => {
  switch (true) {
    case e === 1: {
      return (
        <>
          <StarFilled /> <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />
        </>
      );
    }
    case e === 2: {
      return (
        <>
          <StarFilled /> <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />
        </>
      );
    }
    case e === 3: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarOutlined /> <StarOutlined /> <StarOutlined />
        </>
      );
    }
    case e === 4: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarOutlined /> <StarOutlined /> <StarOutlined />
        </>
      );
    }
    case e === 5: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarFilled /> <StarOutlined /> <StarOutlined />
        </>
      );
    }
    case e === 6: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarFilled /> <StarOutlined /> <StarOutlined />
        </>
      );
    }
    case e === 7: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarOutlined />
        </>
      );
    }
    case e === 8: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarOutlined />
        </>
      );
    }
    case e === 9: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
        </>
      );
    }
    case e === 10: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
        </>
      );
    }
    default: {
      return (
        <>
          <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
        </>
      );
    }
  }
};
