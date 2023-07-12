export default function ErrorSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M479.982-280q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453-433h60v-253h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
    </svg>
  );
}

const East = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z" />
    </svg>
  );
};
const NorthEast = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294L202-160Z" />
    </svg>
  );
};
const SouthEast = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="M364-200v-60h294L160-758l42-42 498 498v-294h60v396H364Z" />
    </svg>
  );
};
const South = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="M480-80 200-360l42-42 208 208v-686h60v686l208-208 42 42L480-80Z" />
    </svg>
  );
};
const SouthWest = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="M200-200v-396h60v294l498-498 42 42-498 498h294v60H200Z" />
    </svg>
  );
};
const West = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="M360-200 80-480l280-280 42 42-208 208h686v60H194l208 208-42 42Z" />
    </svg>
  );
};
const NorthWest = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="M758-160 260-658v294h-60v-396h396v60H302l498 498-42 42Z" />
    </svg>
  );
};
const North = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
    >
      <path d="M450-80v-686L242-558l-42-42 280-280 280 280-42 42-208-208v686h-60Z" />
    </svg>
  );
};

export { East, SouthEast, SouthWest, South, West, North, NorthEast, NorthWest };
