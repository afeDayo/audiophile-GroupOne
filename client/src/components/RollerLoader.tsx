import React from "react";

const RollerLoader: React.FC = () => {
  return (
    <div id="loading" class="py-16 text-center block">
      <div class="mx-auto h-16 w-16 animate-spin rounded-full border-6 border-gray-200 border-t-gray-900"></div>
      <p class="mt-3 text-sm text-gray-500">Loading...</p>
    </div>
  );
};

export default RollerLoader;
