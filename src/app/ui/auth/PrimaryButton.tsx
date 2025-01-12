const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
    <button 
        className="w-full bg-headerColor font-bodyFont font-semibold text-white flex items-center justify-center p-2 hover:bg-white hover:text-headerColor hover:border hover:border-headerColor"
    >
        {children}
    </button>
)

export default PrimaryButton;