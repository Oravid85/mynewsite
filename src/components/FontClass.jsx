import React from "react";

function FontClass() {
  return (
    <div className="p-8 space-y-4">
      {/* כותרות */}
      <h1 className="font-heebo text-4xl text-amber-900">כותרת ראשית</h1>
      <h2 className="font-assistant text-2xl text-amber-800">כותרת משנה</h2>
      <h3 className="font-noto text-xl text-amber-700">תת-כותרת</h3>

      {/* טקסטים */}
      <p className="font-alef text-base text-gray-800">טקסט גוף</p>
      <p className="font-assistant text-sm text-gray-600">טקסט קטן / הערות</p>

      {/* כפתורים */}
      <button className="font-heebo text-base bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
        כפתור ראשי
      </button>
      <button className="font-rubik text-base bg-gray-200 text-amber-800 px-4 py-2 rounded hover:bg-gray-300">
        כפתור משני
      </button>

      {/* קישור */}
      <a href="#" className="font-alef text-base text-blue-600 hover:underline">
        קישור
      </a>
    </div>
  );
}

export default FontClass;
