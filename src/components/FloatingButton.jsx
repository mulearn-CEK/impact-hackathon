function FloatingButton() {
    return (
        <div className="fixed bottom-6 right-6 md:hidden z-40">
            <button className="bg-primary text-background-dark rounded-full p-4 shadow-lg hover:bg-primary-dark transition-colors neon-glow-primary">
                <span className="material-symbols-outlined text-2xl">edit_square</span>
            </button>
        </div>
    );
}

export default FloatingButton;
