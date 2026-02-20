type ConfirmModalProps = {
  isOpen: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmModal({
  isOpen,
  title = "Please Confirm",
  message = "Are you sure you want to save changes?",
  confirmText = "Yes",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[520px] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-xl font-medium text-gray-800">
            {title}
          </h2>
        </div>
        <div className="border-t border-gray-300" />
        <div className="px-6 py-6">
          <p className="text-gray-500 text-base">
            {message}
          </p>
        </div>
        <div className="border-t border-gray-300" />
        <div className="px-6 py-4 flex justify-end gap-4">
          <button
            onClick={onConfirm}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {confirmText}
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
