import psutil
import pytest
import requests
import subprocess
import time

BASE_URL = 'http://localhost:1999'
PERSON_API = '/api/person'

'''
@pytest.fixture(scope="session", autouse=True)
def start_and_stop_program():
    # Process name or executable file for the program
    program_name = 'node'  # Adjust to just 'node' since you're running the node executable

    # Check if the process is already running
    process_running = False
    for proc in psutil.process_iter(['pid', 'name']):
        if program_name in proc.info['name']:
            process_running = True
            break

    if not process_running:
        # Start the Node.js program (e.g., the web API)
        # Ensure the paths are correct: the node executable and server.js script location
        node_executable = 'node'  # or provide full path to node executable if needed
        server_script = os.path.abspath('../server.js')  # Absolute path to server.js
        node_web_api_dir = os.path.abspath('../node-web-api')  # Absolute path to the node-web-api directory
        
        # Run the Node.js server using subprocess
        process = subprocess.Popen([node_executable, server_script], cwd=node_web_api_dir)
        time.sleep(2)  # Wait for the server to start (adjust as needed)
    else:
        process = None

    yield  # This is where the testing happens

    # After all tests are done, terminate the process if it was started by this fixture
    if isinstance(process, subprocess.Popen):  # Check if it's a subprocess that was started
        print("Stopping process...")
        process.terminate()
        process.wait()
'''

@pytest.mark.order(1)
def test_post_person():
    url = f"{BASE_URL}{PERSON_API}"
    payload = {'name': 'John Doe', 'age': 30}
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=payload, headers=headers)
    assert response.status_code == 201

@pytest.mark.order(2)
def test_get_persons():
    url = f"{BASE_URL}{PERSON_API}"
    response = requests.get(url)
    assert response.status_code == 200

@pytest.mark.order(3)
def test_get_person_by_id():
    url = f"{BASE_URL}{PERSON_API}/0"
    response = requests.get(url)
    assert response.status_code == 200

@pytest.mark.order(4)
def test_get_person_by_id_not_found():
    url = f"{BASE_URL}{PERSON_API}/42"
    response = requests.get(url)
    assert response.status_code == 404

@pytest.mark.order(5)
def test_patch_person():
    url = f"{BASE_URL}{PERSON_API}/0"
    payload = {'name': 'John Blue', 'age': 18}
    headers = {'Content-Type': 'application/json'}
    response = requests.patch(url, json=payload, headers=headers)
    assert response.status_code == 200

@pytest.mark.order(6)
def test_delete_person_by_id():
    url = f"{BASE_URL}{PERSON_API}/0"
    response = requests.delete(url)
    assert response.status_code == 204

@pytest.mark.order(7)
def test_not_found():
    url = f"{BASE_URL}/42"
    response = requests.get(url)
    assert response.status_code == 404
