cd /home/surya/project/saleor/saleor
source /home/surya/project/saleor/saleorenv/bin/activate
export API_URI=http://127.0.0.1:8000/graphql/
export APP_MOUNT_URI=/dashboard/
#export DEFAULT_COUNTRY=IN
#export DEFAULT_CURRENCY=INR
python manage.py runserver 0.0.0.0:8000
