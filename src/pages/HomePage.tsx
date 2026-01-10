import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">홈</h1>
                
                {isAuthenticated ? (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">환영합니다!</h2>
                        <p className="mb-2">이름: {user?.name}</p>
                        <p className="mb-2">이메일: {user?.email}</p>
                        <button
                            onClick={logout}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                            로그아웃
                        </button>
                    </div>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="mb-4">로그인이 필요합니다.</p>
                        <Link
                            to="/login"
                            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            로그인하기
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;