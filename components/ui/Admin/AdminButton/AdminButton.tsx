import scss from './AdminButton.module.scss';

const AdminButton = ({ loading }: { loading: boolean }) => {
    return (
        <div className={scss.wrapper}>
            <button type="submit" className={scss.button}>
                {loading ? 'Loading...' : 'Save'}
            </button>
        </div>
    );
};

export default AdminButton;
